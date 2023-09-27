<template>
  <div class="gn-relative">
    <slot></slot>
    <span :class="cn(stateMsgClass)">
      <span class="gn-text-red-700" v-if="$slots['state-msg-danger']">
        <slot name="state-msg-danger" />
      </span>
      <span class="gn-text-amber-500" v-if="$slots['state-msg-warn']">
        <slot name="state-msg-warn" />
      </span>
      <span class="gn-text-green-700" v-if="$slots['state-msg-success']">
        <slot name="state-msg-success" />
      </span>
      <span class="gn-text-white" v-if="$slots['state-msg-primary']">
        <slot name="state-msg-primary" />
      </span>
    </span>
    <div class="gn-relative gn-h-[40px]">
      <input class="gn-peer" :class="cn(inputClass)" />

      <div :class="cn(iconClass)" v-if="$slots['icon']">
        <slot name="icon"></slot>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { cva } from "class-variance-authority";
import { cn } from "../lib/utils";
import { useSlots } from "vue";
const props = defineProps({
  as: {
    type: [String, Object],
    default: "input",
  },
  state: {
    type: String,
    validator: (val) =>
      ["primary", "success", "danger", "warn", "dark"].includes(val),
    default: "primary",
  },
  stateMsgPosition: {
    type: String,
    validator: (val) => ["topRight", "bottomRight", "bottomLeft"].includes(val),
    default: "bottomLeft",
  },
  iconPosition: {
    type: String,
    validator: (val) => ["left", "right"].includes(val),
    default: "left",
  },
  size: {
    type: String,
    validator: (val) => ["xs", "sm", "md", "lg", "xl"].includes(val),
    default: "md",
  },

});

const slots = useSlots();

const returnPadding = () => {
  if (slots.icon) {

    return ["left", "right"].includes(props.iconPosition) ? props.iconPosition : "left";
  } else {
    return 'default'
  }
}

// TODO EXPORT THIS TO A JS OR TS FILE. THIS MUST BE EXTERNAL

const inputClass = computed(() => {
  return cva("gn-w-full gn-h-[100%] gn-bg-slate-700 gn-rounded-xl focus:gn-none gn-outline-none gn-border-none ", {
    variants: {
      padding: {
        default: 'gn-px-2',
        left: 'gn-pl-[50px] gn-pr-2',
        right: 'gn-pr-[50px] gn-pl-2'
      }
    }
  })({
    padding: returnPadding()
  })
})


const stateMsgClass = computed(() => {
  return cva("gn-px-5 gn-absolute gn-text-xs", {
    variants: {
      stateMsgPosition: {
        topRight: "gn--top-1/2 gn-right-0",
        bottomLeft: "gn--bottom-1/2 gn-left-0",
        bottomRight: "gn--bottom-1/2 gn--right-1/2",
      },
      state: {
        primary: "gn-text-white",
        success: "gn-text-green-700",
        danger: "gn-text-red-700",
        warn: "gn-text-amber-500",
      },
    },
  })({
    stateMsgPosition: props.stateMsgPosition,
    state: props.state,
  });
});

const iconClass = computed(() => {
  return cva(
    "gn-bg-slate-700 gn-text-slate-400 gn-absolute gn-top-1/2 gn-transform gn--translate-y-1/2 gn-flex gn-items-center gn-justify-center gn-origin-0 gn-transition-all gn-duration-300 peer-focus:gn-bg-slate-600 peer-focus:gn-text-300",
    {
      variants: {
        size: {
          xs: "",
          sm: "",
          md: "gn-w-10 gn-h-full gn-rounded-xl",
          lg: "",
          xl: "",
        },
        position: {
          right:
            "gn-right-0 peer-focus:-gn-translate-y-[70%] peer-focus:gn-translate-x-[20%]",
          left: "gn-left-0 peer-focus:-gn-translate-y-[70%] peer-focus:-gn-translate-x-[20%]",
        },
      },
    }
  )({
    size: props.size,
    position: props.iconPosition,
  });
});

</script>

<style scoped></style>
