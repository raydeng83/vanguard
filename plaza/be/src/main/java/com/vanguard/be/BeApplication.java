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
        user1.setUsername("jadams");
        user1.setEmail("JAdams@example.com");
        user1.setPhone("999-999-9999");
        user1.setSubtitle("Full Stack Developer");
        user1.setImageName("admin.png");
        user1.setDescription("This is a user description for John Adams.");
        userService.saveUser(user1);

        User user2 = new User();
        user2.setFirstName("Admin");
        user2.setLastName("Admin");
        user2.setUsername("Admin");
        user2.setEmail("admin@example.com");
        user2.setPhone("888-888-8888");
        user2.setSubtitle("IAM Engineer");
        user2.setImageName("admin.png");
        user2.setDescription("This is a user description for Admin.");
        userService.saveUser(user2);

        User user3 = new User();
        user3.setFirstName("Demo");
        user3.setLastName("Demo");
        user3.setUsername("demo");
        user3.setEmail("demo@example.com");
        user3.setPhone("777-888-8888");
        user3.setSubtitle("IAM Engineer");
        user3.setImageName("admin.png");
        user3.setDescription("This is a user description for Demo.");
        userService.saveUser(user3);

    }

}
