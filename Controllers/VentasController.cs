using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using pruebaxd.Models;

namespace pruebaxd.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class VentasController : ControllerBase
    {
        private readonly ProyectointegradorContext _context;

        public VentasController(ProyectointegradorContext context)
        {
            _context = context;
        }

        // GET: api/Ventas
        [HttpGet]
        [Route("List")]
        public async Task<ActionResult<IEnumerable<Ventum>>> GetVenta()
        {
          if (_context.Venta == null)
          {
              return NotFound();
          }
            return await _context.Venta.ToListAsync();
        }

        // GET: api/Ventas/5
        [HttpGet]
        [Route("Get/{id}")]
        public async Task<ActionResult<Ventum>> GetVentum(int id)
        {
          if (_context.Venta == null)
          {
              return NotFound();
          }
            var ventum = await _context.Venta.FindAsync(id);

            if (ventum == null)
            {
                return NotFound();
            }

            return ventum;
        }

        // PUT: api/Ventas/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut]
        [Route("update/{id}")]
        public async Task<IActionResult> PutVentum(int id, Ventum ventum)
        {
            if (id != ventum.Folio)
            {
                return BadRequest();
            }

            _context.Entry(ventum).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!VentumExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Ventas
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        [Route("post")]
        public async Task<ActionResult<Ventum>> PostVentum([FromBody] Ventum ventum)
        {
          if (_context.Venta == null)
          {
              return Problem("Entity set 'ProyectointegradorContext.Venta'  is null.");
          }
            _context.Venta.Add(ventum);
            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateException)
            {
                if (VentumExists(ventum.Folio))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtAction("GetVentum", new { id = ventum.Folio }, ventum);
        }

        // DELETE: api/Ventas/5
        [HttpDelete]
        [Route("Delete/{id}")]
        public async Task<IActionResult> DeleteVentum(int id)
        {
            if (_context.Venta == null)
            {
                return NotFound();
            }
            var ventum = await _context.Venta.FindAsync(id);
            if (ventum == null)
            {
                return NotFound();
            }

            _context.Venta.Remove(ventum);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool VentumExists(int id)
        {
            return (_context.Venta?.Any(e => e.Folio == id)).GetValueOrDefault();
        }
    }
}
