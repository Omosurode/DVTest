using Microsoft.AspNetCore.SignalR.Protocol;

namespace PartnersProject.Models
{
    public class Persona
    {
        public int ID { get; set; }
        public string Nombres { get; set; } = string.Empty;
        public string Apellidos { get; set; } = string.Empty;
        public int NumeroID { get; set; }
        public string Email { get; set; } = string.Empty;
        public int TipoID { get; set; }
        public DateTime CreadoEn { get; set; }
        public string NumeroTipoID { get; set; } = string.Empty;

        public string NombreCompleto { get; set; } = string.Empty;
    }
}
