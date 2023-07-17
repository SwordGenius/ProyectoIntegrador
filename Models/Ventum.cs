using System;
using System.Collections.Generic;

namespace pruebaxd.Models;

public partial class Ventum
{
    public int Folio { get; set; }

    public string CodigoProducto { get; set; } = null!;

    public DateOnly FechaVenta { get; set; }

    public int CantidadVendida { get; set; }

    public virtual Producto CodigoProductoNavigation { get; set; } = null!;
}
