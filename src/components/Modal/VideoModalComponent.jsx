import React, { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";

const VideoModalComponent = (props) => {
  const { show, title, body, footer, children, maxSizeStyle } = props;
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  return (
    <Transition.Root show={show} as={Fragment}>
      <Dialog
        as="div"
        static
        className="fixed z-10 inset-0 overflow-y-auto w-full"
        open={show}
        onClose={() => null}
      >
        <div className="flex items-center justify-center min-h-screen p-tmd text-center sm:block sm:p-0">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-gray-700 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          {/* This element is to trick the browser into centering the modal contents. */}
          <span
            className="hidden sm:inline-block sm:align-middle sm:h-screen"
            aria-hidden="true"
          >
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <div
              className={classNames(
                maxSizeStyle ? maxSizeStyle : " max-w-lg ",
                " inline-flex align-bottom  md:rounded-lg px-4 md:px-4 md:py-4 text-left overflow-hidden  justify-center transform transition-all sm:my-8 sm:align-middle sm:w-full sm:p-6"
              )}
            >
              <div>
                  {title ? (
                    <Dialog.Title
                      as="h3"
                      className="text-lg leading-6 font-medium text-gray-900"
                    >
                      {title ?? title}
                    </Dialog.Title>
                  ) : undefined}
                  <div className="">{children}</div>
              </div>
              {footer ?? footer}
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
  // }
}

export default VideoModalComponent;
