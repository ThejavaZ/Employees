class CV {
  id: number;
  employeeId: number;
  proyectId: number;
  habilityId: number;

  constructor(
    id: number,
    employeeId: number,
    proyectId: number,
    habilityId: number
  ) {
    this.id = id;
    this.employeeId = employeeId;
    this.proyectId = proyectId;
    this.habilityId = habilityId;
  }
}

export default CV;
