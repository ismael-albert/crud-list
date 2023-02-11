package routes

import (
	"github.com/gofiber/fiber/v2"
	"wncrud.com/m/controllers"
)
func Routes(app *fiber.App){
	app.Get("/api/v1/products", controllers.GetProducts)
	app.Get("/api/v1/products/:id", controllers.GetProductFindById)
	app.Post("/api/v1/products", controllers.CreateProduct)
	app.Delete("/api/v1/products/:id", controllers.DeleteProduct)
	app.Put("/api/v1/products/:id", controllers.UpdateProduct)
}
