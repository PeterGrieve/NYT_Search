var argument = ["run build"];
var opts = { stdio: "inherit", cwd: "client", shell: true };

require("child_process").spawn("npm", argument, opts);