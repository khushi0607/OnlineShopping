package com.gainsight.ECommerce.controller;

import com.gainsight.ECommerce.entity.Users;
import com.gainsight.ECommerce.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/login")
public class UserController {

    @Autowired
    public UserService userService;

    @CrossOrigin
    @GetMapping(value="/{username}", produces = "application/json")
    public Users getUser(@PathVariable String username){
        return userService.getUser(username);
    }

    @CrossOrigin
    @PostMapping(consumes = "application/json")
    public HttpStatus addUser(@RequestBody Users user){
        if(userService.addUser(user))
            return HttpStatus.OK;
        return HttpStatus.NOT_MODIFIED;
    }

}
