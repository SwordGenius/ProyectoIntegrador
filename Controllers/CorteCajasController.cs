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
    public class CorteCajasController : ControllerBase
    {
        private readonly ProyectointegradorContext _context;

        public CorteCajasController(ProyectointegradorContext context)
        {
            _context = context;
        }

        // GET: api/CorteCajas
        [HttpGet]
        public async Task<ActionResult<IEnumerable<CorteCaja>>> GetCorteCajas()
        {
          if (_context.CorteCajas == null)
          {
              return NotFound();
          }
            return await _context.CorteCajas.ToListAsync();
        }

        // GET: api/CorteCajas/5
        [HttpGet("{id}")]
        public async Task<ActionResult<CorteCaja>> GetCorteCaja(DateOnly id)
        {
          if (_context.CorteCajas == null)
          {
              return NotFound();
          }
            var corteCaja = await _context.CorteCajas.FindAsync(id);

            if (corteCaja == null)
            {
                return NotFound();
            }

            return corteCaja;
        }

        // PUT: api/CorteCajas/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutCorteCaja(DateOnly id, CorteCaja corteCaja)
        {
            if (id != corteCaja.FechaCorteCaja)
            {
                return BadRequest();
            }

            _context.Entry(corteCaja).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!CorteCajaExists(id))
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

        // POST: api/CorteCajas
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<CorteCaja>> PostCorteCaja(CorteCaja corteCaja)
        {
          if (_context.CorteCajas == null)
          {
              return Problem("Entity set 'ProyectointegradorContext.CorteCajas'  is null.");
          }
            _context.CorteCajas.Add(corteCaja);
            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateException)
            {
                if (CorteCajaExists(corteCaja.FechaCorteCaja))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtAction("GetCorteCaja", new { id = corteCaja.FechaCorteCaja }, corteCaja);
        }

        // DELETE: api/CorteCajas/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteCorteCaja(DateOnly id)
        {
            if (_context.CorteCajas == null)
            {
                return NotFound();
            }
            var corteCaja = await _context.CorteCajas.FindAsync(id);
            if (corteCaja == null)
            {
                return NotFound();
            }

            _context.CorteCajas.Remove(corteCaja);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool CorteCajaExists(DateOnly id)
        {
            return (_context.CorteCajas?.Any(e => e.FechaCorteCaja == id)).GetValueOrDefault();
        }
    }
}
