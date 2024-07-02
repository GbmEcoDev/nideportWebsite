export default defineAppConfig({
    ui: {
        primary: 'teal',
        gray: 'cool',
        slideover:{
          "wrapper": "fixed inset-0 w-1/2 flex z-50",
          "overlay": {
            "base": "fixed inset-0 transition-opacity",
            "background": " ",
            "transition": {
              "enter": "ease-in-out duration-500",
              "enterFrom": "opacity-0",
              "enterTo": "opacity-100",
              "leave": "ease-in-out duration-500",
              "leaveFrom": "opacity-100",
              "leaveTo": "opacity-0"
            }
          },
          "base": "relative flex-1 flex flex-col w-full focus:outline-none",
          "background": "",
          "ring": "",
          "rounded": "",
          "padding": "",
          "shadow": "shadow-xl",
          "width": "w-screen max-w-md",
          "translate": {
            "base": "translate-x-0",
            "left": "-translate-x-full rtl:translate-x-full",
            "right": "translate-x-full rtl:-translate-x-full"
          },
          "transition": {
            "enter": "transform transition ease-in-out duration-300",
            "leave": "transform transition ease-in-out duration-200"
          }
        },
        card:{
            "base": "border-0",
            "background": "bg-gray-900/90",
            "divide": "",
            "ring": "ring-gray-700",
            "rounded": "rounded-lg",
            "shadow": "shadow",
            "body": {
              "base": "",
              "background": "",
              "padding": "px-4 py-5 sm:p-6"
            },
            "header": {
              "base": "text-white",
              "background": "",
              "padding": "px-4 py-5 sm:px-6"
            },
            "footer": {
              "base": "",
              "background": "",
              "padding": "px-4 py-4 sm:px-6"
            }
          },
          tabs: {
            
              wrapper: 'relative space-y-2',
              container: 'relative w-full',
              base: 'focus:outline-none',
              list: {
                base: 'relative',
                background: 'bg-gray-800',
                rounded: 'rounded-lg',
                shadow: '',
                padding: 'p-1',
                height: 'h-10',
                width: 'w-full',
                marker: {
                  wrapper: 'absolute top-[4px] left-[4px] duration-200 ease-out focus:outline-none',
                  base: 'w-full h-full',
                  background: 'bg-gray-900',
                  rounded: 'rounded-md',
                  shadow: 'shadow-sm',
                },
                tab: {
                  base: 'relative inline-flex items-center justify-center flex-shrink-0 w-full ui-focus-visible:outline-0 ui-focus-visible:ring-2 ui-focus-visible:ring-primary-500 dark:ui-focus-visible:ring-primary-400 ui-not-focus-visible:outline-none focus:outline-none disabled:cursor-not-allowed disabled:opacity-75 transition-colors duration-200 ease-out',
                  background: '',
                  active: 'text-white',
                  inactive: 'text-gray-400',
                  height: 'h-8',
                  padding: 'px-3',
                  size: 'text-sm',
                  font: 'font-medium',
                  rounded: 'rounded-md',
                  shadow: '',
                },
            },
            
          },
          accordion: {
            "wrapper": "w-full flex flex-col",
            "item": {
              "base": "",
              "size": "text-sm",
              "color": "text-gray-400",
              "padding": "pt-1.5 pb-3",
              "icon": "ms-auto transform transition-transform duration-200"
            },
            "transition": {
              "enterActiveClass": "overflow-hidden transition-[height] duration-200 ease-out",
              "leaveActiveClass": "overflow-hidden transition-[height] duration-200 ease-out"
            },
            "default": {
              "openIcon": "i-heroicons-chevron-down-20-solid",
              "closeIcon": "",
              "class": "mb-1.5 w-full",
              "variant": "soft"
            }
          }
          
    }
    
  })