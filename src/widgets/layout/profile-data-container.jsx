import React from "react";
import {
  Avatar,
  Typography,
  Button,
  Chip,
  Card,
} from "@material-tailwind/react";
import {
  MapPinIcon,
  BriefcaseIcon,
  EnvelopeIcon,
  StarIcon,
} from "@heroicons/react/24/solid";
import { DevicePhoneMobileIcon } from "@heroicons/react/24/solid";

export const ProfileDataContainer = ({ userData, isCustomer, isMe }) => {
  const ProfileHandlers = () => {
    return (
      <div className="flex w-full justify-center px-4 lg:order-3 lg:mt-0 lg:w-4/12 lg:justify-end lg:self-center">
        <Button className="mr-3 bg-blue-400">Edit Profile</Button>
        <Button color="red">Delete Profile</Button>
      </div>
    );
  };

  return (
    <section className="relative bg-blue-gray-50/50 px-4 py-16">
      <div className="container mx-auto">
        <div className="relative -mt-64 mb-6 flex w-full min-w-0 flex-col break-words rounded-3xl bg-white shadow-xl shadow-gray-500/5">
          <div className="px-6">
            <div className="flex flex-wrap justify-center">
              <div className="flex w-full justify-center px-4 lg:order-2 lg:w-3/12">
                <div className="relative">
                  <div className="-mt-20 w-40">
                    <Avatar
                      src={userData.img}
                      alt="Profile picture"
                      variant="circular"
                      className="h-full w-full shadow-xl"
                    />
                  </div>
                </div>
              </div>

              {!isCustomer && isMe && <ProfileHandlers />}
              {isCustomer && isMe && <ProfileHandlers />}
              {!isCustomer && !isMe && (
                <div className="flex w-full justify-center px-4 lg:order-3 lg:mt-0 lg:w-4/12 lg:justify-end lg:self-center">
                  <Button
                    className="bg-blue-400"
                    // onClick={handleOpen}
                  >
                    Booking
                  </Button>
                </div>
              )}

              {isCustomer ? (
                <div className="flex w-full items-center justify-center px-4 lg:order-1 lg:w-4/12" />
              ) : (
                <div className="flex w-full items-center justify-center px-4 lg:order-1 lg:w-4/12">
                  <div className="flex justify-center py-4 pt-8 lg:pt-4">
                    <div className="mr-4 flex flex-col items-center p-3 text-center">
                      <BriefcaseIcon className="-mt-px h-4 w-4 text-blue-gray-700" />
                      <Typography className="font-medium text-blue-gray-700">
                        {userData.jobTitle}
                      </Typography>
                    </div>
                    <div className="p-3 text-center lg:mr-4">
                      <div className="flex gap-1">
                        <StarIcon className="-mt-px h-4 w-4" color="orange" />
                        <StarIcon className="-mt-px h-4 w-4" color="orange" />
                        <StarIcon className="-mt-px h-4 w-4" color="orange" />
                        <StarIcon className="-mt-px h-4 w-4" color="orange" />
                        <StarIcon className="-mt-px h-4 w-4 text-blue-gray-700" />
                      </div>
                      <Typography className="font-medium text-blue-gray-700">
                        {userData.rate} Rated
                      </Typography>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className="my-8 text-center">
              <Typography variant="h2" color="blue-gray" className="mb-0">
                {userData.name}
              </Typography>

              <div className="flex items-center justify-center gap-2">
                <MapPinIcon className="-mt-px h-4 w-4 text-blue-gray-700" />
                <Typography className="font-medium text-blue-gray-700">
                  {userData.city}, {userData.district}
                </Typography>

                {!isCustomer && (
                  <>
                    <Typography className="font-small text-blue-gray-700">
                      |
                    </Typography>
                    <Typography className="font-small text-blue-gray-700">
                      {userData.workType} works
                    </Typography>
                  </>
                )}
              </div>

              <div className="mb-3 flex items-center justify-center gap-2">
                <Typography className="font-small text-blue-gray-700">
                  ({userData.address})
                </Typography>
              </div>

              <div className="mb-0 flex items-center justify-center gap-2">
                <EnvelopeIcon className="-mt-px h-4 w-4 text-blue-gray-700" />
                <Typography className="font-medium text-blue-gray-700">
                  {userData.email}
                </Typography>
              </div>

              <div className="mb-3 flex items-center justify-center gap-2">
                <DevicePhoneMobileIcon className="-mt-px h-4 w-4 text-blue-gray-700" />
                <Typography className="font-medium text-blue-gray-700">
                  {userData.mobile}
                </Typography>
              </div>

              {!isCustomer && userData.skills.length > 0 && (
                <div className="mb-2 flex items-center justify-center gap-2">
                  <div className="flex gap-2">
                    {userData.skills.map((skill) => (
                      <Chip
                        key={skill}
                        variant="filled"
                        value={skill}
                        className="bg-black/50"
                      />
                    ))}
                  </div>
                </div>
              )}
            </div>

            {!isCustomer && (
              <div className="mb-5 border-t border-blue-gray-50 py-6 text-center">
                <div className="mt-2 flex flex-wrap justify-center">
                  <div className="flex w-full flex-col items-center px-4 lg:w-9/12">
                    <Typography className="mb-8 font-normal text-blue-gray-500">
                      {userData.desc}
                    </Typography>

                    {userData.projects.length > 0 && (
                      <>
                        <Typography className="mb-5 font-normal text-blue-gray-500">
                          My previous projects
                        </Typography>
                        <div className="mb-10 grid grid-cols-1 gap-5 gap-x-24 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                          {userData.projects.map(({ proName, img }) => (
                            <Card
                              className="flex items-center gap-2 shadow-none"
                              key={proName}
                            >
                              <img
                                alt={proName}
                                src={img}
                                className="h-full w-full"
                              />
                            </Card>
                          ))}
                        </div>
                      </>
                    )}

                    {!isMe && (
                      <Button variant="text"> Give a Feedback & Rate </Button>
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfileDataContainer;
