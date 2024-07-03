using PartnersProject.Models;
using System.Data.SqlClient;
using PartnersProject.Data;
using System.Data;

namespace PartnersProject.Services
{
    public class PersonasService
    {
        public static int RegisterPersona(PersonaAddRequest persona)
        {
            using (SqlConnection oConection = new SqlConnection(Connection.connectionString))
            {
                SqlCommand cmd = new SqlCommand("[dbo].[Persona_InsertV1]", oConection);
                cmd.CommandType = CommandType.StoredProcedure;

                cmd.Parameters.AddWithValue("@Nombres", persona.Nombres);
                cmd.Parameters.AddWithValue("@Apellidos", persona.Apellidos);
                cmd.Parameters.AddWithValue("@NumeroID", persona.NumeroID);
                cmd.Parameters.AddWithValue("@Email", persona.Email);
                cmd.Parameters.AddWithValue("@TipoID", persona.TipoID);
                cmd.Parameters.AddWithValue("@Usuario", persona.Usuario);
                cmd.Parameters.AddWithValue("@Pass", persona.Pass);

                SqlParameter idOutput = new SqlParameter("@Id", SqlDbType.Int);
                idOutput.Direction = ParameterDirection.Output;

                cmd.Parameters.Add(idOutput);

                try
                {
                    oConection.Open();
                    cmd.ExecuteNonQuery();

                    int outputValue = (int)cmd.Parameters["@Id"].Value;

                    return outputValue;
                }
                catch (Exception e) {
                    return -1;
                }
                
            }

        }

        public static List<Persona> GetPersonas()
        {
            List<Persona> personas = new List<Persona>();

            using (SqlConnection oConection = new SqlConnection(Connection.connectionString))
            {
                SqlCommand cmd = new SqlCommand("[dbo].[Persona_SelectV1]", oConection);
                cmd.CommandType = CommandType.StoredProcedure;

                try
                {
                    oConection.Open();
                    cmd.ExecuteNonQuery();

                    using (SqlDataReader dr = cmd.ExecuteReader())
                    {
                        while (dr.Read())
                        {
                            Persona persona = new Persona();

                            persona.ID = (int)dr["ID"];
                            persona.Nombres = dr["Nombres"].ToString() ?? " ";
                            persona.Apellidos = dr["Apellidos"].ToString() ?? " ";
                            persona.NumeroID = (int)dr["NumeroID"];
                            persona.Email = dr["Email"].ToString() ?? " ";
                            persona.TipoID = (int)dr["TipoID"];
                            persona.CreadoEn = Convert.ToDateTime(dr["FechaCreado"].ToString());
                            persona.NumeroTipoID = dr["NumeroTipoID"].ToString() ?? " ";   
                            persona.NombreCompleto = dr["NombreCompleto"].ToString() ?? " ";

                            personas.Add(persona);
                        }
                    }

                    return personas;
                }
                catch (Exception ex)
                {
                    return personas;
                }
            }
        }
    }
}