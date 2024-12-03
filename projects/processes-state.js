import {exec} from 'child_process'

export function ProcessesState() {
    console.log("=== 💊 Estados de procesos 💊 ===");

    //obteniendo informacion del proceso actual 
    console.log(`📣 ID del proceso: ${process.pid}`);
    console.log(`📣 Memory usage: ${JSON.stringify(process.memoryUsage(),null,'\t')}`);
    console.log(`📣 Cpu Time: ${JSON.stringify(process.cpuUsage(),null,'\t')}`);

    //evento del proceso
    process.on('exit', (code) => {
        console.log(`➡ Proceso finaliza con el codigo:  ${code}`)
    });
}