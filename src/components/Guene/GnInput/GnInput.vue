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
      <input class="gn-peer" :class="cn(inputClass, roundClass)" :style="roundedSizeChecker() == 'arb' ? `border-radius: ${props.roundSize}` : ''" />

      <div :class="cn(iconClass, roundClass)" v-if="$slots['icon']" :style="roundedSizeChecker() == 'arb' ? `border-radius: ${props.roundSize}` : ''"  class="[&>span]:gn-w-5 [&>span]:gn-h-5" >
        <span>
          <slot name="icon"></slot>
        </span>
      </div>
    </div>

    {{roundedSizeChecker()}} {{cn(roundClass)}}
  </div>
</template>

<script setup>
import { computed } from "vue";
import { cva } from "class-variance-authority";
import { cn } from "../lib/utils";
import { useSlots } from "vue"

const available_sizes = ["xs", "sm", "md", "lg", "xs"]

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
  roundSize: {
    type: String,
    validator: (val) => ["xs", "sm", "md", "lg", "xs"].includes(val),
    default: "xl"
  },
  size: {
    type: String,
    validator: (val) => ["xs", "sm", "md", "lg", "xs"].includes(val),
    default: "md",
  },

});

const slots = useSlots();

const returnIconPosition = () => {
  if (slots.icon) {

    return ["left", "right"].includes(props.iconPosition) ? props.iconPosition : "left";
  } else {
    return 'default'
  }
}


const roundedSizeChecker = () => {
  if(available_sizes.includes(props.roundSize)){
    return props.roundSize
  } else {
    if(props.roundSize && props.roundSize.length > 0) {
      return 'arb'
    } else {
      return 'xl'
    }
  }
}

// TODO EXPORT THIS TO A JS OR TS FILE. THIS MUST BE EXTERNAL

const roundClass = computed(()=>{
  return cva("", {
    variants: {
      roundSize: {
        xs: 'gn-rounded xs',
        sm: 'gn-rounded-sm',
        md: 'gn-rounded-md',
        lg: 'gn-rounded-lg',
        xl: 'gn-rounded-xl',
        //arb: `gn-rounded-[${props.roundSize}]`
      }
    }
  })({
      roundSize: roundedSizeChecker()
    })
})

const inputClass = computed(() => {
  return cva("gn-w-full gn-h-[100%] gn-bg-slate-700 focus:gn-none gn-outline-none gn-border-none ", {
    variants: {
      padding: {
        default: 'gn-px-2',
        left: 'gn-pl-[50px] gn-pr-2',
        right: 'gn-pr-[50px] gn-pl-2'
      },
    }
  })({
    padding: returnIconPosition()
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
          md: "gn-w-10 gn-h-full",
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
    position: returnIconPosition(),
  });
});

</script>

<style scoped></style>
