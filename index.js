import {childprocesses} from '/workspaces/OS-1-2024B-DELETE/projects/child-processes.js'
import {ipc} from '/workspaces/OS-1-2024B-DELETE/projects/ipc.js'
import {ProcessesState} from '/workspaces/OS-1-2024B-DELETE/projects/processes-state.js'

console.log("✨ Programa de procesosos ✨")
let option= process.argv[2];
switch (option) {
    case "1":
        childprocesses();
        break;
    case "2":
        ipc();
        break;
    case "3":
        ProcessesState();
        break;
    default:
        console.log("❌ opcion invalida ❌");
    break;
}