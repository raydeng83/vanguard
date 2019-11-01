package com.vanguard.be;

import com.vanguard.be.model.User;
import com.vanguard.be.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class BeApplication implements CommandLineRunner {

    private final UserService userService;

    public BeApplication(UserService userService) {
        this.userService = userService;
    }

    public static void main(String[] args) {
        SpringApplication.run(BeApplication.class, args);
    }

    @Override
    public void run(String... args) {
        User user1 = new User();
        user1.setFirstName("John");
        user1.setLastName("Adams");
        user1.setUsername("j");
        user1.setEmail("JAdams@example.com");
        user1.setPhone("999-999-9999");
        user1.setDescription("This is a user description for John Adams.");
        userService.createUser(user1);

        User user2 = new User();
        user2.setFirstName("Admin");
        user2.setLastName("Admin");
        user2.setUsername("Admin");
        user2.setEmail("admin@example.com");
        user2.setPhone("888-888-8888");
        user2.setDescription("This is a user description for Admin.");
        userService.createUser(user2);

    }

}
