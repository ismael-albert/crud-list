go mod init wncrud.com/m 
go install github.com/cosmtrek/air@latest -> air init
go get github.com/gofiber/fiber/v2
go get -u gorm.io/gorm
go get -u gorm.io/driver/sqlite

    - go mod tidy
    - air
    - go run main.go