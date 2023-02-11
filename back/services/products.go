package services

import (
	"fmt"

	"wncrud.com/m/db"
	"wncrud.com/m/models"
)
func GetProducts() []models.Product {

	var products []models.Product
	db.DB.Find(&products)
	return products
}

func CreateProduct(input models.CreateProductInput)  error {
	if input.Title == "" || input.Content == "" {
		return  fmt.Errorf("title and content are required")
	}
	
	product := models.Product{Title: input.Title, Content: input.Content}
	result := db.DB.Create(&product)
	if result.Error != nil {
		return  result.Error
	}
	return  nil
}
func GetProductFindById(id string) []models.Product {

	var products []models.Product
	db.DB.Find(&products, id)
	return products
}
func DeleteProduct(id string) error {
	if id == "" {
		return fmt.Errorf("id is required")
	}
	var products []models.Product
	db.DB.Delete(&products, id)
	return nil
}


func UpdateProduct(id string, input models.UpdateProductInput) error {
    if id == "" {
        return fmt.Errorf("id is required")
    }
    var product models.Product
    err := db.DB.Where("id = ?", id).First(&product).Error
    if err != nil {
        return fmt.Errorf("product not found")
    }
    if input.Title == "" || input.Content == "" {
        return fmt.Errorf("title and content are required")
    }
    db.DB.Model(&product).Updates(models.Product{Title: input.Title, Content: input.Content})
    
	return nil
}