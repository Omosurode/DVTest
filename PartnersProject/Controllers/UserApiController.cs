using Microsoft.AspNetCore.Mvc;
using PartnersProject.Models;
using PartnersProject.Services;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace PartnersProject.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserApiController : ControllerBase
    {
        // POST api/<UserApiController>
        [HttpPost]
        public bool Post([FromBody] UserLogin userInfo)
        {
            return UserService.LoginUsuario(userInfo);
        }
    }
}
