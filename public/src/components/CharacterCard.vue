<template>
    <div class="character-card d-flex flex-column">
        <div>
            {{firstName}}
        </div>
        <div>
            {{lastName}}
        </div>
        <slot></slot>
    </div>
</template>
<script lang="ts">


import {Vue, Component, Prop} from 'vue-property-decorator'
import { ICharacter } from '../contracts/Character'

@Component
export default class PlayerCard extends Vue 
{
    @Prop()
    public character!: ICharacter;

    public get firstName() {
        return this.character && this.character.firstName
    }

    public get lastName() {
        return this.character && this.character.lastName
    }

} 
</script>

<style lang="scss">
    .character-card {
        box-shadow: 0.1rem 0.1rem 0.1rem 0.1rem rgba($color: #000000, $alpha: 0.5);
        border-radius: 1rem;
    }
</style>