using System.ComponentModel.DataAnnotations;

namespace PartnersProject.Models
{
    public class UserLogin
    {
        [Required]
        [MaxLength(50)]
        public string Usuario { get; set; } = string.Empty;

        [Required]
        [MaxLength(50)]
        public string Pass { get; set; } = string.Empty;
    }
}
