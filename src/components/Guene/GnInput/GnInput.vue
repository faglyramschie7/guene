<template>
  <div class="relative">
    <slot></slot>
    <span :class="cn(stateMsgClass)">
      <span class="text-red-700" v-if="$slots['state-msg-danger']">
        <slot name="state-msg-danger" />
      </span>
      <span class="text-amber-500" v-if="$slots['state-msg-warn']">
        <slot name="state-msg-warn" />
      </span>
      <span class="text-green-700" v-if="$slots['state-msg-success']">
        <slot name="state-msg-success" />
      </span>
      <span class="text-white" v-if="$slots['state-msg-primary']">
        <slot name="state-msg-primary" />
      </span>
    </span>
    <div class="relative h-[40px]">
      <input class="peer" :class="cn(inputClass, roundClass)" :style="roundedSizeChecker() == 'arb' ? `border-radius: ${props.roundSize}` : ''" />

      <div :class="cn(iconClass, roundClass)" v-if="$slots['icon']" :style="roundedSizeChecker() == 'arb' ? `border-radius: ${props.roundSize}` : ''"  class="[&>span]:w-5 [&>span]:h-5" >
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
        xs: 'rounded xs',
        sm: 'rounded-sm',
        md: 'rounded-md',
        lg: 'rounded-lg',
        xl: 'rounded-xl',
        //arb: `rounded-[${props.roundSize}]`
      }
    }
  })({
      roundSize: roundedSizeChecker()
    })
})

const inputClass = computed(() => {
  return cva("w-full h-[100%] bg-slate-700 focus:none outline-none border-none ", {
    variants: {
      padding: {
        default: 'px-2',
        left: 'pl-[50px] pr-2',
        right: 'pr-[50px] pl-2'
      },
    }
  })({
    padding: returnIconPosition()
  })
})


const stateMsgClass = computed(() => {
  return cva("px-5 absolute text-xs", {
    variants: {
      stateMsgPosition: {
        topRight: "-top-1/2 right-0",
        bottomLeft: "-bottom-1/2 left-0",
        bottomRight: "-bottom-1/2 -right-1/2",
      },
      state: {
        primary: "text-white",
        success: "text-green-700",
        danger: "text-red-700",
        warn: "text-amber-500",
      },
    },
  })({
    stateMsgPosition: props.stateMsgPosition,
    state: props.state,
  });
});

const iconClass = computed(() => {
  return cva(
    "bg-slate-700 text-slate-400 absolute top-1/2 transform -translate-y-1/2 flex items-center justify-center origin-0 transition-all duration-300 peer-focus:bg-slate-600 peer-focus:text-300",
    {
      variants: {
        size: {
          xs: "",
          sm: "",
          md: "w-10 h-full",
          lg: "",
          xl: "",
        },
        position: {
          right:
            "right-0 peer-focus:-translate-y-[70%] peer-focus:translate-x-[20%]",
          left: "left-0 peer-focus:-translate-y-[70%] peer-focus:-translate-x-[20%]",
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
