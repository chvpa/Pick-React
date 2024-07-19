const ContactButton = () => {
    return(
        <div className="lg:flex lg:flex-grow lg:justify-end lg:basis-0">
            <a href="#" className="flex items-center text-white">
              Contactanos
              <span className="pl-2 pt-[1px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18px"
                  height="18px"
                  viewBox="0 0 256 256"
                >
                  <path
                    fill="currentColor"
                    d="m220.24 132.24l-72 72a6 6 0 0 1-8.48-8.48L201.51 134H40a6 6 0 0 1 0-12h161.51l-61.75-61.76a6 6 0 0 1 8.48-8.48l72 72a6 6 0 0 1 0 8.48"
                  ></path>
                </svg>
              </span>
            </a>
          </div>
    )
}

export default ContactButton;