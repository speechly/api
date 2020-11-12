from setuptools import setup, find_namespace_packages
import pathlib

setup(
    name='speechly_apis',
    version='0.0.2',
    description='Speechly Public Protobuf Stubs',
    include_package_data=True,
    include=['../README.md'],
    classifiers=[
        'Development Status :: 3 - Alpha',
        'Intended Audience :: Developers',
        'Topic :: Software Development :: Build Tools',
        'Programming Language :: Python :: 3 :: Only',
    ],
    packages=find_namespace_packages(where='src/', include='*'),
    package_dir={
        '': 'src'
    },
    python_requires='>=3.8',
)
