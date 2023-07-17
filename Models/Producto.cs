using System;
using System.Collections.Generic;

namespace pruebaxd.Models;

public partial class Producto
{
    public string CodigoProducto { get; set; } = null!;

    public string Descripcion { get; set; } = null!;

    public double PrecioCompra { get; set; }

    public double PrecioVenta { get; set; }

    public int Existencia { get; set; }

    public int InventarioMin { get; set; }

    public virtual ICollection<Ventum> Venta { get; set; } = new List<Ventum>();
}
