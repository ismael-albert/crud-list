package server

import (
	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/cors"
	"wncrud.com/m/db"
	"wncrud.com/m/routes"
)
func InitServer(){
	db.InitDb()
	app := fiber.New()
	
	app.Use(cors.New(cors.Config{
        AllowOrigins: "*",
        AllowHeaders: "Origin, Content-Type, Accept",
    }))

	routes.Routes(app)

	app.Listen(":4100")
}