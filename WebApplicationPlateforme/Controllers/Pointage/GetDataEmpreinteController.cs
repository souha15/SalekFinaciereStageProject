using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using WebApplicationPlateforme.Data;
using WebApplicationPlateforme.Model.Pointage;

namespace WebApplicationPlateforme.Controllers.Pointage
{
    [Route("api/[controller]")]
    [ApiController]
    public class GetDataEmpreinteController : ControllerBase
    {
        private readonly FinanceContext _context;
        
        public GetDataEmpreinteController(FinanceContext context)
        {
            _context = context;
         
        }

        [HttpGet("{present}")]
        public List<ViaEmpreinte> getData(string present)
        {
            var empreintes = _context.ViaEmpreintes.Where(x => x.present == present).ToList();

            return empreintes;
        }
    }
}