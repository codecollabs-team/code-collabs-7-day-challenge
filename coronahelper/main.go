package main

import (
	"bufio"
	"fmt"
	"os"
	"strings"
)

var scanner1 = bufio.NewScanner(os.Stdin)

func main() {
	workers := []string{
		"nurse",
		"therapist",
		"admin",
		"receptionist",
		"store assistant",
		"bin man",
		"delivery drivers",
		"support worker"}

	fmt.Printf("Are you currently outside?(yes or no):")
	scanner1.Scan()
	getText := scanner1.Text()

	switch strings.ToLower(getText) {
	case "no":
		fmt.Println("thank you for staying at home")
	case "yes":
		fmt.Printf("What is your job role?")

		scanner := bufio.NewScanner(os.Stdin)
		scanner.Scan()
		jobRole := scanner.Text()

		if jobRole == "" {
			fmt.Printf("Cannot enter empty job title")
		}

		if strings.ToLower(jobRole) == "doctor" {
			fmt.Println("Stay safe, thank you NHS")
			return
		}

		keyWorker := IsKeyWorker(strings.ToLower(jobRole), workers)
		if keyWorker {
			fmt.Println("stay safe")
		} else {
			fmt.Println("Work from home")
		}
	}
}

// IsKeyWorker returns true or false if job role returned is a key worker
func IsKeyWorker(job string, keyWorkers []string) bool {
	for _, worker := range keyWorkers {
		if worker == job {
			return true
		}
	}
	return false
}
