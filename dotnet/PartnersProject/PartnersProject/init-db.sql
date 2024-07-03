IF DB_ID('UserDB') IS NULL
    CREATE DATABASE UserDB;
GO

USE UserDB;
GO

-- Create the table Personas if it doesn't exist
IF OBJECT_ID('dbo.Personas', 'U') IS NULL
BEGIN
    CREATE TABLE Personas (
        ID INT PRIMARY KEY IDENTITY,
        Nombres NVARCHAR(50) NOT NULL,
        Apellidos NVARCHAR(50) NOT NULL,
        NumeroID INT NOT NULL,
        Email NVARCHAR(255) NOT NULL,
        TipoID INT NOT NULL,
        FechaCreado DATE DEFAULT GETDATE(),
        NumeroTipoID AS CONCAT(NumeroID, TipoID),
        NombreCompleto AS CONCAT(Nombres, ' ', Apellidos)
    );
END;
GO

-- Create the table Usuarios if it doesn't exist
IF OBJECT_ID('dbo.Usuarios', 'U') IS NULL
BEGIN
    CREATE TABLE Usuarios (
        Identificador INT REFERENCES Personas,
        Usuario NVARCHAR(50) NOT NULL,
        Pass NVARCHAR(50) NOT NULL,
        FechaCreado DATE DEFAULT GETDATE(),
        PRIMARY KEY (Identificador)
    );
END;
GO

-- Drop the stored procedure Persona_SelectV1 if it exists
IF OBJECT_ID('dbo.Persona_SelectV1', 'P') IS NOT NULL
    DROP PROCEDURE dbo.Persona_SelectV1;
GO

-- Create stored procedure Persona_SelectV1
CREATE PROC [dbo].[Persona_SelectV1]
AS

/*------------ TEST CODE --------------
	
EXEC dbo.Persona_SelectV1

*/

BEGIN
    SELECT * FROM Personas;
END;
GO

SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

-- Drop the stored procedure Persona_InsertV1 if it exists
IF OBJECT_ID('dbo.Persona_InsertV1', 'P') IS NOT NULL
    DROP PROCEDURE dbo.Persona_InsertV1;
GO

-- Create stored procedure Persona_InsertV1
CREATE PROC [dbo].[Persona_InsertV1]
    @Nombres NVARCHAR(50),
    @Apellidos NVARCHAR(50),
    @NumeroID INT,
    @Email NVARCHAR(255),
    @TipoID INT,
    @Usuario NVARCHAR(50),
    @Pass NVARCHAR(50),
    @Id INT OUTPUT
AS

/*------------ TEST CODE --------------
-- Persona Table params
Declare @Id int = 0,
		@Nombres NVARCHAR(50) = 'Test',
        @Apellidos NVARCHAR(50) = 'User',
        @NumeroID INT = '1000400500',
        @Email NVARCHAR(255) = 'Test@Mail.com',
        @TipoID INT = 1,
        @Usuario NVARCHAR(50) = 'TestUser',
        @Pass NVARCHAR(50) = 'TestPass'
	
EXEC dbo.Persona_InsertV1
						@Nombres,
                        @Apellidos,
                        @NumeroID,
                        @Email,
                        @TipoID,
                        @Usuario,
                        @Pass,
						@Id OUTPUT

*/

BEGIN
    DECLARE @PersonaID INT = 0;

    INSERT INTO [dbo].[Personas] ( 
                    [Nombres], 
                    [Apellidos], 
                    [NumeroID], 
                    [Email], 
                    [TipoID]) 
    VALUES (
                    @Nombres,
                    @Apellidos,
                    @NumeroID,
                    @Email,
                    @TipoID)

    SET @Id = SCOPE_IDENTITY()

    INSERT INTO [dbo].[Usuarios] (
                        [Identificador],
                        [Usuario],
                        [Pass])
    VALUES (
                        @Id,
                        @Usuario,
                        @Pass)
END;
GO

-- Drop the stored procedure Usuario_LoginV1 if it exists
IF OBJECT_ID('dbo.Usuario_LoginV1', 'P') IS NOT NULL
    DROP PROCEDURE dbo.Usuario_LoginV1;
GO

-- Create stored procedure Usuario_LoginV1
CREATE PROC [dbo].[Usuario_LoginV1]
    @Usuario NVARCHAR(50),
    @Pass NVARCHAR(50)
AS

/*------------ TEST CODE --------------
-- Usuario Table params
Declare @Usuario NVARCHAR(50) = 'testformuser123',
        @Pass NVARCHAR(50) = 'pass@word'
	
EXEC dbo.Usuario_LoginV1						
                        @Usuario,
                        @Pass

*/

BEGIN

    SELECT 1 FROM Usuarios 
                WHERE Usuario = @Usuario 
                AND Pass = @Pass

END;
GO