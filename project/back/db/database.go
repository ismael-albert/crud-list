package db

import (
	"gorm.io/driver/sqlite"
	"gorm.io/gorm"
	"wncrud.com/m/models"
)
var DB *gorm.DB
var err error
func InitDb() {
	DB, err = gorm.Open(sqlite.Open("./db/data.db"), &gorm.Config{})
	if err != nil {
		panic("failed to connect database")
	}
	DB.AutoMigrate(&models.Product{})
}