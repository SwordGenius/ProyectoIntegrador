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
    public class UsuariosController : ControllerBase
    {
        private readonly ProyectointegradorContext _context;

        public UsuariosController(ProyectointegradorContext context)
        {
            _context = context;
        }

        // GET: api/Usuarios
        [HttpGet]
        [Route("list")]
        public async Task<ActionResult<IEnumerable<GestorUsuario>>> GetGestorUsuarios()
        {
          if (_context.GestorUsuarios == null)
          {
              return NotFound();
          }
          List<GestorUsuario> list = await _context.GestorUsuarios.OrderByDescending(e => e.Usuario).ToListAsync();
          return StatusCode(StatusCodes.Status200OK, list);
        }

        // GET: api/Usuarios/5
        [HttpGet]
        [Route("get/{id}")]
        public async Task<ActionResult<GestorUsuario>> GetGestorUsuario(string id)
        {
          if (_context.GestorUsuarios == null)
          {
              return NotFound();
          }
            var gestorUsuario = await _context.GestorUsuarios.FindAsync(id);

            if (gestorUsuario == null)
            {
                return NotFound();
            }

            return gestorUsuario;
        }

        // PUT: api/Usuarios/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut]
        [Route("update/{id}")]
        public async Task<IActionResult> PutGestorUsuario(string id, GestorUsuario gestorUsuario)
        {
            if (id != gestorUsuario.Usuario)
            {
                return BadRequest();
            }

            _context.Entry(gestorUsuario).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!GestorUsuarioExists(id))
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

        // POST: api/Usuarios
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        [Route("post")]
        public async Task<ActionResult<GestorUsuario>> PostGestorUsuario(GestorUsuario gestorUsuario)
        {
          if (_context.GestorUsuarios == null)
          {
              return Problem("Entity set 'ProyectointegradorContext.GestorUsuarios'  is null.");
          }
            _context.GestorUsuarios.Add(gestorUsuario);
            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateException)
            {
                if (GestorUsuarioExists(gestorUsuario.Usuario))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtAction("GetGestorUsuario", new { id = gestorUsuario.Usuario }, gestorUsuario);
        }

        // DELETE: api/Usuarios/5
        [HttpDelete("{id}")]
        [Route("delete/{id}")]   
        public async Task<IActionResult> DeleteGestorUsuario(string id)
        {
            if (_context.GestorUsuarios == null)
            {
                return NotFound();
            }
            var gestorUsuario = await _context.GestorUsuarios.FindAsync(id);
            if (gestorUsuario == null)
            {
                return NotFound();
            }

            _context.GestorUsuarios.Remove(gestorUsuario);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool GestorUsuarioExists(string id)
        {
            return (_context.GestorUsuarios?.Any(e => e.Usuario == id)).GetValueOrDefault();
        }
    }
}
