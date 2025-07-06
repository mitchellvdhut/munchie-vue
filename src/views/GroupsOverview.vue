<script lang="ts">
import { defineComponent} from 'vue';
import { onMounted } from 'vue'
import TopNav from '@/components/TopNav.vue';
import { ChevronLeft, Plus, ChevronRight} from 'lucide-vue-next';
import Image from '@/components/Image.vue'
import useMember from '@/composables/useMembers';
import ActionButton from '@/components/ActionButton.vue';
import GroupCard from '@/components/GroupCard.vue';

export default defineComponent({
  name: 'GroupOverview',
  components: {
    TopNav,
    Image,
    GroupCard,
    ActionButton,
  },

  setup() {

    const {fetchMembers, error, members, loading} = useMember()
    onMounted(async () => {
      await fetchMembers()
    })

    return {
      ChevronLeft,
      ChevronRight,
      error,
      members,
      loading,
      Plus
    };
  }  
})
</script>

<template>
  <TopNav
    :leftIcon="ChevronLeft"
    :rightIcon="Plus"
    linkIconLeft="/"
    onRightIconClick="/create-group"
    heading="Mijn groepen"
  ></TopNav>
<div class="relative m-auto mt-12">
  </div>
  <div class="m-7">
    <GroupCard
      v-for="member in members"
      :key="member.location.postcode"
      :groupCardImage="member.picture.thumbnail"
      :groupCardTitle="member.name.first"
    >
    <div class="ml-3">
    <Image
        v-for="member in members"
        class="-ml-3 rounded-2xl inline-block"
        :src="member.picture.thumbnail"
        :imageWidth="30"
        alt="Groep afbeelding"
        style="box-shadow: -1px -1px 101px 0px rgba(99,102,241,0.26);"
      />
      </div>
    </GroupCard>
  </div>
</template>