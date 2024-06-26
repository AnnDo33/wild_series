const AbstractRepository = require("./AbstractRepository");

class ProgramRepository extends AbstractRepository {
  constructor() {
    super({ table: "program" });
  }

  async create(program) {
    const [result] = await this.database.query(
      `insert into ${this.table} (title, synopsis, poster, country, year, category_id) values (?, ?, ?, ?, ?, ?)`,
      [
        program.title,
        program.synopsis,
        program.poster,
        program.country,
        program.year,
        program.category_id,
      ]
    );
    return result.insertId;
  }

  async read(id) {
    const [rows] = await this.database.query(
      `select * from ${this.table} where id = ?`,
      [id]
    );
    return rows[0];
  }

  async readAll() {
    const [rows] = await this.database.query(`select * from ${this.table}`);
    return rows;
  }

  // TODO: Implement update and delete operations if needed
}

module.exports = ProgramRepository;
