package com.example.btlltnc.Controller;

import com.example.btlltnc.Base.BaseController;
import com.example.btlltnc.Model.Schedule;
import com.example.btlltnc.Repository.ScheduleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;

@RestController
@RequestMapping(value = "/schedule")
@CrossOrigin(allowedHeaders = "*")
public class ScheduleController extends BaseController<Schedule, ScheduleRepository> {
    @Autowired
    public ScheduleRepository repository;

    @Override
    public ScheduleRepository get() {
        return repository;
    }

    @GetMapping(path = "/findByNameFilm")
    public ResponseEntity<?> findByNameFilmAndNameRoom(@RequestParam(name="nameFilm", required = false) String nameFilm, HttpServletRequest request){
        return ResponseEntity.ok(repository.findScheduleByNameFilm(nameFilm));
    }
}
