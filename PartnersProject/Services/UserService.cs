using PartnersProject.Models;
using System.Data.SqlClient;
using PartnersProject.Data;
using System.Data;

namespace PartnersProject.Services
{
    public class UserService
    {
        public static bool LoginUsuario(UserLogin usuario)
        {
            using (SqlConnection oConection = new SqlConnection(Connection.connectionString))
            {
                SqlCommand cmd = new SqlCommand("[dbo].[Usuario_LoginV1]", oConection);
                cmd.CommandType = CommandType.StoredProcedure;

                cmd.Parameters.AddWithValue("@Usuario", usuario.Usuario);
                cmd.Parameters.AddWithValue("@Pass", usuario.Pass);

                bool result = false;

                try
                {
                    oConection.Open();
                    cmd.ExecuteNonQuery();

                    using (SqlDataReader dr = cmd.ExecuteReader())
                    {
                        while (dr.Read())
                        {
                            if (dr.GetInt32(0) == 1)
                            {
                                result = true;
                            }
                        }
                    }

                    return result;
                }
                catch (Exception e)
                {
                    return result;
                }

            }
        }
    }
}
