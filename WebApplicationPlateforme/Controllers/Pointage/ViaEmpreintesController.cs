using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using ExcelDataReader;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.CodeAnalysis.CSharp.Syntax;
using Microsoft.EntityFrameworkCore;
using WebApplicationPlateforme.Data;
using WebApplicationPlateforme.Model.Pointage;

namespace WebApplicationPlateforme.Controllers.Pointage
{
    [Route("api/[controller]")]
    [ApiController]
    public class ViaEmpreintesController : ControllerBase
    {
        private readonly FinanceContext _context;
        private IHostingEnvironment _hostingEnvironment;
        public ViaEmpreintesController(FinanceContext context, IHostingEnvironment environment)
        {
            _context = context;
            _hostingEnvironment = environment;
        }


        [HttpPost]
        [Route("download")]
        public async Task <ActionResult<IEnumerable<ViaEmpreinte>>> UploadRead( string file)
        {
            
            var uploads = Path.Combine(_hostingEnvironment.WebRootPath, "uploads");
            var filePath = Path.Combine(uploads, file);
            var memory = new MemoryStream();
            using (var stream = new FileStream(filePath, FileMode.Open))
            {
                 stream.CopyToAsync(memory);
                 stream.Flush();
                
            }
            var empreintes = this.GetViaEmpreinteList(filePath);
            //return empreintes;
            empreintes.ToArray();
            for (int i=0;i<empreintes.Count; i++)
            {
                _context.ViaEmpreintes.Add(empreintes[i]);
                await _context.SaveChangesAsync();
             
            }
            return empreintes.ToArray();
        }


        [HttpPost]
        [Route("downloadPresence")]
        public async Task<ActionResult<IEnumerable<ViaEmpreinte>>> UploadReadPresence(string file)
        {

            var uploads = Path.Combine(_hostingEnvironment.WebRootPath, "uploads");
            var filePath = Path.Combine(uploads, file);
            var memory = new MemoryStream();
            using (var stream = new FileStream(filePath, FileMode.Open))
            {
                stream.CopyToAsync(memory);
                stream.Flush();

            }
            var empreintes = this.GetViaEmpreinteListPresence(filePath);
            //return empreintes;
            empreintes.ToArray();
            for (int i = 0; i < empreintes.Count; i++)
            {
                _context.ViaEmpreintes.Add(empreintes[i]);
                await _context.SaveChangesAsync();

            }
            return empreintes.ToArray();
        }


        private List<ViaEmpreinte> GetViaEmpreinteListPresence(string fName)
        {
            List<ViaEmpreinte> empreintes = new List<ViaEmpreinte>();

            var uploads = Path.Combine(_hostingEnvironment.WebRootPath, "uploads");
            var fileName = Path.Combine(uploads, fName);
            System.Text.Encoding.RegisterProvider(System.Text.CodePagesEncodingProvider.Instance);

            if (Directory.Exists(uploads))
            {
                if (System.IO.File.Exists(fileName))
                {
                    using (var stream = System.IO.File.Open(fileName, FileMode.Open, FileAccess.Read))
                    {
                        using (var reader = ExcelReaderFactory.CreateReader(stream))
                        {
                            while (reader.Read())
                            {
                                empreintes.Add(new ViaEmpreinte()
                                {
                                    attribut1 = fName.Substring(fName.IndexOf("uploads") + 8),
                                    numEmp = reader.GetValue(0).ToString(),
                                    date = reader.GetValue(1).ToString(),
                                    heureAssister = reader.GetValue(2).ToString(),
                                    present ="Presence" + reader.GetValue(1).ToString(),

                                });



                            }

                        }
                    }

                }
            }
            return empreintes;
        }

        private List<ViaEmpreinte> GetViaEmpreinteList(string fName)
        {
            List<ViaEmpreinte> empreintes = new List<ViaEmpreinte>();
      
            var uploads = Path.Combine(_hostingEnvironment.WebRootPath, "uploads");
            var fileName = Path.Combine(uploads, fName);
            System.Text.Encoding.RegisterProvider(System.Text.CodePagesEncodingProvider.Instance);

            if (Directory.Exists(uploads)) {
                if (System.IO.File.Exists(fileName))
                {
                    using (var stream = System.IO.File.Open(fileName, FileMode.Open, FileAccess.Read))
                    {
                        using (var reader = ExcelReaderFactory.CreateReader(stream))
                        {
                            while (reader.Read())
                            {
                                empreintes.Add(new ViaEmpreinte()
                                {
                                    attribut1 = fName.Substring(fName.IndexOf("uploads")+8),
                                    numEmp = reader.GetValue(0).ToString(),
                                    date = reader.GetValue(1).ToString(),
                                    heureAssister = reader.GetValue(2).ToString(),
                                    heurePartir = reader.GetValue(3).ToString(),
                                    present = "Presence"+reader.GetValue(1).ToString(),

                                }); 

                            
                               
                            }

                        }
                    }
                 
                    }
            }
            return empreintes; 
        }


        // GET: api/ViaEmpreintes
        [HttpGet]
        public async Task<ActionResult<IEnumerable<ViaEmpreinte>>> GetViaEmpreintes()
        {
            return await _context.ViaEmpreintes.ToListAsync();
        }

        // GET: api/ViaEmpreintes/5
        [HttpGet("{id}")]
        public async Task<ActionResult<ViaEmpreinte>> GetViaEmpreinte(int id)
        {
            var viaEmpreinte = await _context.ViaEmpreintes.FindAsync(id);

            if (viaEmpreinte == null)
            {
                return NotFound();
            }

            return viaEmpreinte;
        }

        // PUT: api/ViaEmpreintes/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutViaEmpreinte(int id, ViaEmpreinte viaEmpreinte)
        {
            if (id != viaEmpreinte.Id)
            {
                return BadRequest();
            }

            _context.Entry(viaEmpreinte).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ViaEmpreinteExists(id))
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

        // POST: api/ViaEmpreintes
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<ViaEmpreinte>> PostViaEmpreinte(ViaEmpreinte viaEmpreinte)
        {
            _context.ViaEmpreintes.Add(viaEmpreinte);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetViaEmpreinte", new { id = viaEmpreinte.Id }, viaEmpreinte);
        }

        // DELETE: api/ViaEmpreintes/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<ViaEmpreinte>> DeleteViaEmpreinte(int id)
        {
            var viaEmpreinte = await _context.ViaEmpreintes.FindAsync(id);
            if (viaEmpreinte == null)
            {
                return NotFound();
            }

            _context.ViaEmpreintes.Remove(viaEmpreinte);
            await _context.SaveChangesAsync();

            return viaEmpreinte;
        }

        private bool ViaEmpreinteExists(int id)
        {
            return _context.ViaEmpreintes.Any(e => e.Id == id);
        }

 
        [HttpGet("{SearchData}")]
        [Route("GetByDate/{SearchData}")]
        public List<ViaEmpreinte> SearchByDate(string SearchData)
        {
            List<ViaEmpreinte> res = new List<ViaEmpreinte>();
            var query = _context.ViaEmpreintes.Where(x => x.present == SearchData);
            res = query.ToList();
            return res;
        
        }
    }

 
}
