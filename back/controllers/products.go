package controllers

import (
	"github.com/gofiber/fiber/v2"
	"wncrud.com/m/models"
	"wncrud.com/m/services"
)

func GetProducts(c *fiber.Ctx) error {
	return c.JSON(services.GetProducts())
}

func CreateProduct(c *fiber.Ctx) error {
	var input models.CreateProductInput
	if err := c.BodyParser(&input); err != nil {
		return c.Status(500).SendString(err.Error())
	}

	err := services.CreateProduct(input)
	if err != nil {
		return c.Status(500).SendString(err.Error())
	}
	return c.SendStatus(200)
}

func GetProductFindById(c *fiber.Ctx) error {
	id := c.Params("id")
	println(id)
	if id == "" {
		return c.Status(500).SendString("id is required")
	}
	return c.JSON(services.GetProductFindById(id))
}

func DeleteProduct(c *fiber.Ctx) error {
	id := c.Params("id")
	if id == "" {
		return c.Status(500).SendString("id is required")
	}
	return c.JSON(services.DeleteProduct(id))
}

func UpdateProduct(c *fiber.Ctx) error {
	id := c.Params("id")
	if id == "" {
		return c.Status(500).SendString("id is required")
	}
	var input models.UpdateProductInput
	if err := c.BodyParser(&input); err != nil {
		return c.Status(500).SendString(err.Error())
	}
	err := services.UpdateProduct(id, input) 
	if err != nil {
		return c.Status(500).SendString(err.Error())
	}	
	return c.SendStatus(200)
}
// add ->
// pesquisa
// ordenação
// paginação
// filtros perPage, page, by, order, search