using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace pruebaxd.Models;

public partial class ProyectointegradorContext : DbContext
{
    public ProyectointegradorContext()
    {
    }

    public ProyectointegradorContext(DbContextOptions<ProyectointegradorContext> options)
        : base(options)
    {
    }

    public virtual DbSet<CorteCaja> CorteCajas { get; set; }

    public virtual DbSet<GestorUsuario> GestorUsuarios { get; set; }

    public virtual DbSet<Producto> Productos { get; set; }

    public virtual DbSet<Ventum> Venta { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    {
        //#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
        //        => optionsBuilder.UseMySql("server=db2.ckhyopeoeghg.us-east-1.rds.amazonaws.com;port=3306;database=proyectointegrador;uid=root;password=root4321", Microsoft.EntityFrameworkCore.ServerVersion.Parse("8.0.33-mysql"));
    }
    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder
            .UseCollation("utf8mb3_general_ci")
            .HasCharSet("utf8mb3");

        modelBuilder.Entity<CorteCaja>(entity =>
        {
            entity.HasKey(e => e.FechaCorteCaja).HasName("PRIMARY");

            entity.ToTable("corte_caja");

            entity.HasIndex(e => e.FechaCorteCaja, "fecha_corte_caja_UNIQUE").IsUnique();

            entity.Property(e => e.FechaCorteCaja).HasColumnName("fecha_corte_caja");
            entity.Property(e => e.Ganancia).HasColumnName("ganancia");
            entity.Property(e => e.ProductosVendidos).HasColumnName("productos_vendidos");
            entity.Property(e => e.VentasTotal).HasColumnName("ventas_total");
        });

        modelBuilder.Entity<GestorUsuario>(entity =>
        {
            entity.HasKey(e => e.Usuario).HasName("PRIMARY");

            entity.ToTable("gestor_usuario");

            entity.HasIndex(e => e.Usuario, "usuario_UNIQUE").IsUnique();

            entity.Property(e => e.Usuario)
                .HasMaxLength(45)
                .HasColumnName("usuario");
            entity.Property(e => e.Administrador).HasColumnName("administrador");
            entity.Property(e => e.Contrasena)
                .HasMaxLength(45)
                .HasColumnName("contrasena");
        });

        modelBuilder.Entity<Producto>(entity =>
        {
            entity.HasKey(e => e.CodigoProducto).HasName("PRIMARY");

            entity.ToTable("producto");

            entity.HasIndex(e => e.CodigoProducto, "codigo_producto_UNIQUE").IsUnique();

            entity.HasIndex(e => e.Descripcion, "desc_idx");

            entity.Property(e => e.CodigoProducto)
                .HasMaxLength(45)
                .HasColumnName("codigo_producto");
            entity.Property(e => e.Descripcion)
                .HasMaxLength(80)
                .HasColumnName("descripcion");
            entity.Property(e => e.Existencia).HasColumnName("existencia");
            entity.Property(e => e.InventarioMin).HasColumnName("inventario_min");
            entity.Property(e => e.PrecioCompra).HasColumnName("precio_compra");
            entity.Property(e => e.PrecioVenta).HasColumnName("precio_venta");
        });

        modelBuilder.Entity<Ventum>(entity =>
        {
            entity.HasKey(e => new { e.Folio, e.CodigoProducto })
                .HasName("PRIMARY")
                .HasAnnotation("MySql:IndexPrefixLength", new[] { 0, 0 });

            entity.ToTable("venta");

            entity.HasIndex(e => e.FechaVenta, "fecha_idx");

            entity.HasIndex(e => e.CodigoProducto, "ventas_fk");

            entity.Property(e => e.Folio).HasColumnName("folio");
            entity.Property(e => e.CodigoProducto)
                .HasMaxLength(45)
                .HasColumnName("codigo_producto");
            entity.Property(e => e.CantidadVendida).HasColumnName("cantidad_vendida");
            entity.Property(e => e.FechaVenta).HasColumnName("fecha_venta");

            entity.HasOne(d => d.CodigoProductoNavigation).WithMany(p => p.Venta)
                .HasForeignKey(d => d.CodigoProducto)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("ventas_fk");
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
