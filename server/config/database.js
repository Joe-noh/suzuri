const base = {
  username: "postgres",
  password: "postgres",
  database: "suzuri_lite_dev",
  host: "127.0.0.1",
  dialect: "postgres",
  operatorsAliases: false,
}

module.exports = {
  development: {
    ...base,
    database: "suzuri_lite_dev",
  },
  test: {
    ...base,
    database: "suzuri_lite_test",
  },
  production: {
    use_env_variable: "DATABASE_URL"
  },
}
