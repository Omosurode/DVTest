CREATE DATABASE UserDB;
GO

USE UserDB;
GO

-- Create the table
CREATE TABLE MyEntities (
    Id INT PRIMARY KEY IDENTITY,
    Name NVARCHAR(50) NOT NULL
);
GO

-- Create stored procedures
CREATE PROCEDURE GetEntities
AS
BEGIN
    SELECT * FROM MyEntities;
END;
GO

CREATE PROCEDURE AddEntity
    @Name NVARCHAR(50)
AS
BEGIN
    INSERT INTO MyEntities (Name) VALUES (@Name);
END;
GO