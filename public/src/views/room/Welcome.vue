<template>
    <div>
        <h1>Welcome to the DND Combat Assistant</h1>
        <div class="d-flex flex-column">
            <button class="btn btn-primary m-4">Join Room</button>

            <button @click="createRoom()" class="btn btn-primary m-4">
                Create Room
            </button>
        </div>
    </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Action, namespace } from 'vuex-class';
import { roomActions } from '../../store/RoomStore';

const roomModule = namespace('roomStore');

@Component
export default class Welcome extends Vue {
    @Action(roomActions.createRoom)
    private createRoom!: () => Promise<void>;
}
</script>
<style lang="scss">
</style>