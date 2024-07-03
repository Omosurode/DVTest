# Use the ASP.NET runtime image as the base image
FROM mcr.microsoft.com/dotnet/aspnet:8.0 AS base
USER app
WORKDIR /app
EXPOSE 8080

# Use the SDK image to build the app
FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build
WORKDIR /src
COPY ["PartnersProject.csproj", "."]
RUN dotnet restore "./PartnersProject.csproj"
COPY . .
WORKDIR "/src"
RUN dotnet build "PartnersProject.csproj" -c Release -o /app/build

# Publish the app
FROM build AS publish
RUN dotnet publish "PartnersProject.csproj" -c Release -o /app/publish

# Final stage / image
FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
COPY . ./
ENTRYPOINT ["dotnet", "PartnersProject.dll"]