package com.vanguard.be.controller;

import com.vanguard.be.model.User;
import com.vanguard.be.service.UserService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.MultipartHttpServletRequest;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.BufferedOutputStream;
import java.io.File;
import java.io.FileOutputStream;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.Iterator;

@RestController
@RequestMapping("/image")
public class ImageResource {
    private String imageName;

    private final UserService userService;

    public ImageResource(UserService userService) {
        this.userService = userService;
    }

    @RequestMapping(value = "/add", method = RequestMethod.POST)
    public ResponseEntity upload(
            @RequestParam("username") String username,
            HttpServletResponse response, HttpServletRequest request
    ) {
        try {
            User user = userService.getUserByUsername(username);
            MultipartHttpServletRequest multipartRequest = (MultipartHttpServletRequest) request;
            Iterator<String> it = multipartRequest.getFileNames();
            MultipartFile multipartFile = multipartRequest.getFile(it.next());
            String fileName = username+".png";
            imageName = fileName;

            byte[] bytes = multipartFile.getBytes();
            BufferedOutputStream stream =
                    new BufferedOutputStream(new FileOutputStream(new File("src/main/resources/static/image/photo/" + fileName)));
            stream.write(bytes);
            stream.close();

            return new ResponseEntity("Upload Success!", HttpStatus.OK);

        } catch (Exception e) {
            e.printStackTrace();
            return new ResponseEntity("Upload Failed!", HttpStatus.BAD_REQUEST);
        }

    }

    @RequestMapping(value = "/update", method = RequestMethod.POST)
    public ResponseEntity updateImagePost(
            @RequestParam("username") String username,
            HttpServletResponse response, HttpServletRequest request
    ) {
        try {
            User user = userService.getUserByUsername(username);
            MultipartHttpServletRequest multipartRequest = (MultipartHttpServletRequest) request;
            Iterator<String> it = multipartRequest.getFileNames();
            MultipartFile multipartFile = multipartRequest.getFile(it.next());
            String fileName = username+".png";
            imageName = fileName;

            Files.delete(Paths.get("src/main/resources/static/image/photo/"+fileName));

            byte[] bytes = multipartFile.getBytes();
            BufferedOutputStream stream =
                    new BufferedOutputStream(new FileOutputStream(new File("src/main/resources/static/image/photo/" + fileName)));
            stream.write(bytes);
            stream.close();

            return new ResponseEntity("Upload Success!", HttpStatus.OK);

        } catch (Exception e) {
            e.printStackTrace();
            return new ResponseEntity("Upload Failed!", HttpStatus.BAD_REQUEST);
        }

    }
}
