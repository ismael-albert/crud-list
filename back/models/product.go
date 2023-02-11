package models

import "gorm.io/gorm"

type Product struct {
	gorm.Model
	// ID        uint      `json:"id" gorm:"primaryKey"`
    Title     string    `json:"title"`
    Content   string    `json:"content"`
}
type CreateProductInput struct {
	Title     string    `json:"title"`
	Content   string    `json:"content"`
}
type UpdateProductInput struct {
	Title     string    `json:"title"`
	Content   string    `json:"content"`
}