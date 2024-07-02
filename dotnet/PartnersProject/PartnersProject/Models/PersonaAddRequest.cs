using System.ComponentModel.DataAnnotations;

namespace PartnersProject.Models
{
    public class PersonaAddRequest
    {
        [Required]
        [MaxLength(50)]
        public string Nombres { get; set; } = string.Empty;

        [Required]
        [MaxLength(50)]
        public string Apellidos { get; set; } = string.Empty;

        [Required]
        public int NumeroID { get; set; }

        [Required]
        [MaxLength(255)]
        public string Email { get; set; } = string.Empty;

        [Required]
        public int TipoID { get; set; }

        [Required]
        [MaxLength(50)]
        public string Usuario { get; set; } = string.Empty;

        [Required]
        [MaxLength(50)]
        public string Pass { get; set; } = string.Empty;
    }
}