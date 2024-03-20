import {world} from '@minecraft/server';
world.afterEvents.entitySpawn.subscribe((event) => {
    const {entity} = event;
    if (entity.typeId == 'allanz:spider_robot')
        entity.nameTag = removePrefix(entity.typeId)
});


function removePrefix(str) {
    let removes = ['_', 'v1', 'v2', '_', '  '];
    const indexDoisPontos = str.indexOf(':');
    if (indexDoisPontos !== -1) {
        let resultado = str.substring(indexDoisPontos + 1);
        for (const remove of removes) {
            resultado = resultado.replace(remove, ' ');
        }
        return resultado.charAt(0).toUpperCase() + resultado.slice(1);
    } else {
        return str;
    }
}