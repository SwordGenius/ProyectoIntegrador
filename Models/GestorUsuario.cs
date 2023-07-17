using System;
using System.Collections.Generic;

namespace pruebaxd.Models;

public partial class GestorUsuario
{
    public string Usuario { get; set; } = null!;

    public string Contrasena { get; set; } = null!;

    public sbyte Administrador { get; set; }
}
