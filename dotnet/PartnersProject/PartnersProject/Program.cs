using Microsoft.AspNetCore.Hosting.Server;
using Microsoft.SqlServer.Management.Common;
using Microsoft.SqlServer.Management.Smo;
using PartnersProject.Data;
using Microsoft.Data.SqlClient;
using System.IO;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

string sqlConnectionString = Connection.initializationString;

string script = File.ReadAllText("init-db.sql");
SqlConnection conn = new SqlConnection(sqlConnectionString);

Server server = new Server(new ServerConnection(conn));

server.ConnectionContext.ExecuteNonQuery(script);

app.Run();