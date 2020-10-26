package de.logistic.repo;

import de.logistic.domain.Car;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CarRepo extends JpaRepository<Car, Long> {
}
