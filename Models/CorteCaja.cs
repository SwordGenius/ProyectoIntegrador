using System;
using System.Collections.Generic;

namespace pruebaxd.Models;

public partial class CorteCaja
{
    public DateOnly FechaCorteCaja { get; set; }

    public double VentasTotal { get; set; }

    public double Ganancia { get; set; }

    public int ProductosVendidos { get; set; }
}
