using Microsoft.AspNetCore.Mvc;
using PartnersProject.Models;
using PartnersProject.Services;


// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace PartnersProject.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PersonasApiController : ControllerBase
    {
        // GET: api/<PersonasApiController>
        [HttpGet]
        public List<Persona> GetPersonas()
        {
            return PersonasService.GetPersonas();
        }

        // POST api/<PersonasApiController>
        [HttpPost]
        public int Post([FromBody] PersonaAddRequest newPersona)
        {
            return PersonasService.RegisterPersona(newPersona);
        }
    }
}