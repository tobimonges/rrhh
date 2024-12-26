package tm.rh.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import tm.rh.models.Empleado;

public interface EmpleadoRepository extends JpaRepository<Empleado, Integer> {


}
